import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AdminDashboard() {
  const navigate = useNavigate();
  const [nominees, setNominees] = useState([
    {
      id: 1,
      name: "Vinícius Jr",
      category: "Men's Ballon D'Or",
      club: "Real Madrid",
    },
    {
      id: 2,
      name: "Aitana Bonmatí",
      category: "Women's Ballon D'Or",
      club: "Barcelona",
    },
    {
      id: 3,
      name: "Emiliano Martínez",
      category: "Yachine Trophy",
      club: "Aston Villa",
    },
    {
      id: 4,
      name: "Jude Bellingham",
      category: "Kopa Trophy",
      club: "Real Madrid",
    },
  ]);

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

  const filteredNominees = nominees.filter((nominee) => {
    const matchesSearch = nominee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" || nominee.category === categoryFilter;

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
      category: nominee.category,
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

  const handleAddNominee = (e) => {
    e.preventDefault();

    const newNominee = {
      id: nominees.length + 1,
      name: formData.name,
      category: formData.category,
      club: formData.club,
    };

    setNominees([...nominees, newNominee]);

    closeModals();
  };

  const handleEditNominee = (e) => {
    e.preventDefault();

    const updatedNominees = nominees.map((nominee) => {
      if (nominee.id === selectedNominee.id) {
        return {
          ...nominee,
          name: formData.name,
          category: formData.category,
          club: formData.club,
        };
      }

      return nominee;
    });

    setNominees(updatedNominees);

    closeModals();
  };

  const handleDeleteNominee = () => {
    const updatedNominees = nominees.filter(
      (nominee) => nominee.id !== selectedNominee.id
    );

    setNominees(updatedNominees);

    closeModals();
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

          <button onClick={() => navigate("/results")}>
           VIEW RESULTS
          </button>

          <button onClick={openAddModal}>
            ADD NOMINEE
            </button>

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
                <td>{nominee.category}</td>
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