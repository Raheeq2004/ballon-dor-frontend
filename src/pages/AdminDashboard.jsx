import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AdminDashboard() {
  const navigate = useNavigate();

  const [nominees, setNominees] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedNominee, setSelectedNominee] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "Men's Ballon D'Or",
    club: "",
  });

  const categoryMap = {
    "Men's Ballon D'Or": 1,
    "Women's Ballon D'Or": 2,
    "Yachine Trophy": 3,
    "Kopa Trophy": 4,
  };

  const getCategoryName = (categoryId) => {
    if (categoryId === 1) return "Men's Ballon D'Or";
    if (categoryId === 2) return "Women's Ballon D'Or";
    if (categoryId === 3) return "Yachine Trophy";
    if (categoryId === 4) return "Kopa Trophy";
    return "Unknown";
  };

  const fetchNominees = async () => {
    try {
      const response = await axios.get("https://ballon-dor-backend-production.up.railway.app/api/nominees");
      setNominees(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load nominees");
    }
  };

  useEffect(() => {
    fetchNominees();
  }, []);

  const filteredNominees = nominees.filter((nominee) => {
    const categoryName = getCategoryName(nominee.category_id);

    const matchesSearch = nominee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" || categoryName === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const openAddModal = () => {
    setFormData({
      name: "",
      category: "Men's Ballon D'Or",
      club: "",
    });

    setShowAddModal(true);
  };

  const openEditModal = (nominee) => {
    setSelectedNominee(nominee);

    setFormData({
      name: nominee.name,
      category: getCategoryName(nominee.category_id),
      club: nominee.club,
    });

    setShowEditModal(true);
  };

  const openDeleteModal = (nominee) => {
    setSelectedNominee(nominee);
    setShowDeleteModal(true);
  };

  const closeModals = () => {
    setShowAddModal(false);
    setShowEditModal(false);
    setShowDeleteModal(false);
    setSelectedNominee(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddNominee = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://ballon-dor-backend-production.up.railway.app/api/nominees", {
        name: formData.name,
        category_id: categoryMap[formData.category],
        club: formData.club,
      });

      await fetchNominees();
      closeModals();
    } catch (error) {
      console.error(error);
      alert("Failed to add nominee");
    }
  };

  const handleEditNominee = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://ballon-dor-backend-production.up.railway.app/api/nominees/${selectedNominee.id}`,
        {
          name: formData.name,
          category_id: categoryMap[formData.category],
          club: formData.club,
        }
      );

      await fetchNominees();
      closeModals();
    } catch (error) {
      console.error(error);
      alert("Failed to update nominee");
    }
  };

  const handleDeleteNominee = async () => {
    try {
      await axios.delete(
        `https://ballon-dor-backend-production.up.railway.app/api/nominees/${selectedNominee.id}`
      );

      await fetchNominees();
      closeModals();
    } catch (error) {
      console.error(error);
      alert("Failed to delete nominee");
    }
  };

  return (
    <>
      <Navbar />

      <div className="admin-page">
        <h1>ADMIN DASHBOARD</h1>

        <div className="admin-controls">
          <input
            type="text"
            placeholder="Search nominee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option>All</option>
            <option>Men's Ballon D'Or</option>
            <option>Women's Ballon D'Or</option>
            <option>Yachine Trophy</option>
            <option>Kopa Trophy</option>
          </select>

          <div className="admin-buttons">
            <button onClick={() => navigate("/results")}>VIEW RESULTS</button>

            <button onClick={openAddModal}>ADD NOMINEE</button>
          </div>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nominee</th>
              <th>Category</th>
              <th>Club</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredNominees.map((nominee) => (
              <tr key={nominee.id}>
                <td>{nominee.id}</td>
                <td>{nominee.name}</td>
                <td>{getCategoryName(nominee.category_id)}</td>
                <td>{nominee.club}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => openEditModal(nominee)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => openDeleteModal(nominee)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showAddModal && (
          <div className="admin-modal-overlay">
            <div className="admin-modal">
              <h2>Add Nominee</h2>

              <form onSubmit={handleAddNominee}>
                <label>Nominee Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />

                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option>Men's Ballon D'Or</option>
                  <option>Women's Ballon D'Or</option>
                  <option>Yachine Trophy</option>
                  <option>Kopa Trophy</option>
                </select>

                <label>Club</label>
                <input
                  type="text"
                  name="club"
                  value={formData.club}
                  onChange={handleInputChange}
                  required
                />

                <div className="modal-actions">
                  <button type="button" onClick={closeModals}>
                    Cancel
                  </button>

                  <button type="submit">Save Nominee</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showEditModal && (
          <div className="admin-modal-overlay">
            <div className="admin-modal">
              <h2>Edit Nominee</h2>

              <form onSubmit={handleEditNominee}>
                <label>Nominee Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />

                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option>Men's Ballon D'Or</option>
                  <option>Women's Ballon D'Or</option>
                  <option>Yachine Trophy</option>
                  <option>Kopa Trophy</option>
                </select>

                <label>Club</label>
                <input
                  type="text"
                  name="club"
                  value={formData.club}
                  onChange={handleInputChange}
                  required
                />

                <div className="modal-actions">
                  <button type="button" onClick={closeModals}>
                    Cancel
                  </button>

                  <button type="submit">Update Nominee</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showDeleteModal && (
          <div className="admin-modal-overlay">
            <div className="admin-modal delete-modal">
              <h2>Delete Nominee</h2>

              <p>
                Are you sure you want to delete{" "}
                <strong>{selectedNominee.name}</strong>?
              </p>

              <div className="modal-actions">
                <button type="button" onClick={closeModals}>
                  Cancel
                </button>

                <button
                  type="button"
                  className="delete-confirm-btn"
                  onClick={handleDeleteNominee}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default AdminDashboard;