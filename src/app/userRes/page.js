"use client";
import React, { useState } from "react";
import { db } from "@/firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  where,
  query,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const FormResponse = ({ formData }) => {
  const [formResponses, setFormResponses] = useState({});

  const handleInputChange = (fieldName, value) => {
    // Update the form responses with the user's input
    setFormResponses((prevResponses) => ({
      ...prevResponses,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Store the form responses in Firestore under a new collection 'responses'
      const docRef = await addDoc(collection(db, "response"), {
        ...formData,
        responses: formResponses,
      });
      //   await db
      //     .collection("responses")
      //     .add({ ...formData, responses: formResponses });
      alert("Form responses submitted successfully!");
    } catch (error) {
      console.error("Error submitting form responses:", error);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center px-4 h-screen w-4/5 space-y-4">
      {/* ... Form Header ... */}
      <div className="relative flex flex-col w-full space-y-4">
        {formData.formContent.map((field) => (
          <div
            key={field.id}
            className="rounded-md bg-white flex w-full shadow-md px-4"
          >
            <div className="flex flex-col w-full">
              <div className="my-4 w-full">
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  {field.label}
                </label>
                {field.question_type === "short_answer" && (
                  <input
                    type="text"
                    className="px-5 shadow-sm h-10 rounded-md block w-full"
                    placeholder={field.label}
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                  />
                )}
                {field.question_type === "paragraph" && (
                  <textarea
                    rows={4}
                    className="px-5 shadow-sm h-20 rounded-md block w-full"
                    placeholder={field.label}
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                  />
                )}
                {field.question_type === "multichoice" && (
                  <select
                    className="px-5 shadow-sm h-10 rounded-md block w-full"
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                  >
                    {field.list.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-md"
        onClick={handleSubmit}
      >
        Submit Responses
      </button>
    </div>
  );
};

export default FormResponse;
