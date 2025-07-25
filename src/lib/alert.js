import Swal from 'sweetalert2';

export const showSuccess = (message = 'Succès !', title = 'Opération réussie') => {
  Swal.fire({
    icon: 'success',
    title: title,
    text: message,
    timer: 2000,
    showConfirmButton: false,
  });
};

export const showError = (message = 'Une erreur est survenue', title = 'Erreur') => {
  Swal.fire({
    icon: 'error',
    title: title,
    text: message,
    timer: 3000,
    showConfirmButton: false,
  });
};
