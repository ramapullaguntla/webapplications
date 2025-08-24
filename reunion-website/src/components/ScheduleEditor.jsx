import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";


const ScheduleEditor = () => {
  const [docs, setDocs] = useState([]);
  const [selectedDocId, setSelectedDocId] = useState(null);
  const [json, setJson] = useState("");
  const [loading, setLoading] = useState(false);
  const collectionName = "olmvolunteers2025"; // your collection name

  useEffect(() => {
    const fetchDocs = async () => {
      const snapshot = await getDocs(collection(db, collectionName));
      setDocs(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    };
    fetchDocs();
  }, []);

  const loadDoc = async (id) => {
    setSelectedDocId(id);
    setLoading(true);
    const docSnap = await getDoc(doc(db, collectionName, id));
    setJson(JSON.stringify(docSnap.data(), null, 2));
    setLoading(false);
  };

  const saveJson = async () => {
    try {
      const parsed = JSON.parse(json);
      await updateDoc(doc(db, collectionName, selectedDocId), parsed);
      alert("Document updated successfully!");
    } catch (err) {
      alert("Invalid JSON or failed to update.");
      console.error(err);
    }
  };

  const addjson = async () => {
    try {
      const parsed = JSON.parse(json);
      await addDoc(collection(db, collectionName), parsed);
      alert("Document added successfully!");
    } catch (err) {
      alert("Invalid JSON or failed to update.");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 max-w-5xl mx-auto">
      <div className="w-full md:w-1/3 space-y-2 min-h-96 border border-1 rounded-md p-1">
        <h2 className="text-xl font-semibold">Documents</h2>
        <ul className="bg-white border rounded-md shadow-sm">
          {docs.sort((a,b) => a.data.order -b.data.order).map((d) => (
            <li
              key={d.id}
              onClick={() => loadDoc(d.id)}
              className={`cursor-pointer px-4 py-2 border-b hover:bg-gray-100 ${
                d.id === selectedDocId ? "bg-blue-200 font-medium" : ""
              }`}
            >
              {d.data.category}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">
          Editing Document
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          selectedDocId && (
            <>
              <textarea
                className="w-full h-96 p-3 font-mono border rounded-md shadow-sm"
                value={json}
                onChange={(e) => setJson(e.target.value)}
              />
              <button
                onClick={saveJson}
                className="m-3 px-2 py-1 bg-green-600 text-white rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
              <button
                onClick={addjson}
                className="m-3 px-2 py-1  bg-green-600 text-white rounded hover:bg-blue-700"
              >
                Add New
              </button>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default ScheduleEditor;
