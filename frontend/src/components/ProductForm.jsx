import React from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const ProductForm = ({ open, handleClose, handleSubmit, currentProduct }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{currentProduct ? 'Editar Producto' : 'Crear Producto'}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Nombre"
            type="text"
            fullWidth
            defaultValue={currentProduct?.name || ''}
          />
          <TextField
            margin="dense"
            name="price"
            label="Precio"
            type="number"
            fullWidth
            defaultValue={currentProduct?.price || ''}
          />
          <TextField
            margin="dense"
            name="description"
            label="Descripción"
            type="text"
            fullWidth
            multiline
            rows={4}
            defaultValue={currentProduct?.description || ''}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" color="primary">
            {currentProduct ? 'Actualizar' : 'Crear'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ProductForm;