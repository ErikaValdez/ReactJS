import React, { useState } from "react";

const initialState = {
  title: "",
  price: "",
  description: "",
  image: ""
};

export default function AgregarProducto({ onProductoAgregado }) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    if (!form.title.trim()) return "El nombre es obligatorio.";
    if (Number(form.price) <= 0) return "El precio debe ser mayor a 0.";
    if (form.description.trim().length < 10) return "La descripción debe tener al menos 10 caracteres.";
    if (!form.image.trim()) return "La URL de la imagen es obligatoria.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("https://687ad5f5abb83744b7edf814.mockapi.io/products/producto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          price: Number(form.price),
          description: form.description,
          image: form.image
        })
      });
      if (!res.ok) throw new Error("Error al agregar producto");
      setForm(initialState);
      if (onProductoAgregado) onProductoAgregado();
    } catch (err) {
      setError("No se pudo agregar el producto.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: "#222", color: "#fff", padding: 24, borderRadius: 16, maxWidth: 400, margin: "2rem auto" }}>
      <h3 style={{ marginBottom: 16 }}>Agregar Producto</h3>
      <div style={{ marginBottom: 12 }}>
        <label>Nombre:</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} style={{ width: "100%" }} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>Precio:</label>
        <input type="number" name="price" value={form.price} onChange={handleChange} style={{ width: "100%" }} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>Descripción:</label>
        <textarea name="description" value={form.description} onChange={handleChange} style={{ width: "100%" }} />
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>URL Imagen:</label>
        <input type="text" name="image" value={form.image} onChange={handleChange} style={{ width: "100%" }} />
      </div>
      {error && <div style={{ color: "#ff6b6b", marginBottom: 12 }}>{error}</div>}
      <button type="submit" disabled={loading} style={{ width: "100%", background: "#09f", color: "#fff", border: "none", borderRadius: 8, padding: 12, fontWeight: 600 }}>
        {loading ? "Agregando..." : "Agregar Producto"}
      </button>
    </form>
  );
}
