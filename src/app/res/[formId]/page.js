"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FormResponse from "../../userRes/page";
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
  getDoc,
  documentId,
} from "firebase/firestore";

const FormResponsePage = () => {
  const router = useParams();
  const formId = router.formId; // Get the form ID from the URL
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Fetch the form data from the database using the form ID
    // const fetchTodos = async (uid) => {
    //   try {
    //     // Create a Firestore query to fetch all the todos for the user with the given ID.
    //     const q = query(collection(db, "todos"), where("owner", "==", uid));

    //     // Execute the query and get a snapshot of the results.
    //     const querySnapshot = await getDocs(q);

    //     // Extract the data from each todo document and add it to the data array.
    //     let data = [];
    //     querySnapshot.forEach((todo) => {
    //       console.log(todo);
    //       data.push({ ...todo.data(), id: todo.id });
    //     });

    //     // Set the todos state with the data array.
    //     setTodos(data);
    //   } catch (error) {
    //     console.error("An error occured", error);
    //   }
    // };
    console.log(formId);
    const fetchFormData = async () => {
      try {
        // const formSnapshot = await db.collection("forms").doc(formId).get();
        // const q = query(
        //   collection(db, "forms"),
        //   where(documentId(), "==", formId)
        // );
        // const formSnapshot = await getDocs().collection(
        //   db,
        //   "forms",
        //   where("documentId", "==", formId)
        // );
        const formRef = doc(db, "forms", formId);
        const formSnapshot = await getDoc(formRef);
        console.log(formSnapshot);

        if (formSnapshot.exists) {
          setFormData(formSnapshot.data());
          console.log(formData);
        } else {
          console.error("Form not found");
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };

    if (formId) {
      fetchFormData();
    }
  }, [formId]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8">Form Responses</h1>
      {formData && <FormResponse formData={formData} />}
    </div>
  );
};

export default FormResponsePage;
