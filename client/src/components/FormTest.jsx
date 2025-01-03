import { useForm } from "react-hook-form";

function FormTest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Formulaire soumis avec succès !");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nom :</label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Le nom est obligatoire" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "L’email est obligatoire",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Adresse email invalide",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <button type="submit">Soumettre</button>
    </form>
  );
}

export default FormTest;
