import { useState, useContext } from 'react'
import { Context } from '../context';
import { TransactionType } from '../context/reducer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addTransactionRequest } from '../api/transctions';
const AddTransaction = () => {
    const { addTransaction, isOnline } = useContext(Context);
    const [label, setLabel] = useState('');
    const [amount, setAmount] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setLabel("")
        setAmount(0)
        setShow(false)
    }
        ;
    const handleShow = () => setShow(true);

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const newTransaction: TransactionType = {
            id: Math.floor(Math.random() * 100000000).toString(),
            label,
            amount: +amount,
            date: new Date()
        }

        if (isOnline) {
            const res = await addTransactionRequest(newTransaction)
            if (res) {
                addTransaction(newTransaction);
            }
        } else {
            addTransaction(newTransaction);
        }

        handleClose()
    }

    const disabled = label === "" || amount === 0

    return (
        <>
            <Button variant="primary" onClick={handleShow} style={{width: "90%", position: "relative", bottom: 0}}>
                Añadir movimiento
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir movimiento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <label htmlFor="transactionLabel">Nombre del movimiento:</label>
                        <input id='transactionLabel' className="form-control" type="text" value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Enter text..." />
                        <label htmlFor="amount">Monto:</label>
                        <input className="form-control" id='amount' type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} placeholder="Enter amount..." />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={onSubmit} disabled={disabled}>
                        Salvar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddTransaction 