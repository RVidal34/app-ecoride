import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import FormTest from "../components/FormTest";

global.alert = vi.fn(); // Simule window.alert

test("submits the form with valid inputs", async () => {
  await act(async () => {
    render(<FormTest />);
  });

  // Remplis les champs
  fireEvent.input(screen.getByLabelText(/Nom/i), {
    target: { value: "Romain" },
  });
  fireEvent.input(screen.getByLabelText(/Email/i), {
    target: { value: "romain@test.com" },
  });

  // Soumets le formulaire
  await act(async () => {
    fireEvent.click(screen.getByText(/Soumettre/i));
  });

  // Vérifie que l'alerte a été appelée
  expect(global.alert).toHaveBeenCalledWith("Formulaire soumis avec succès !");
});
