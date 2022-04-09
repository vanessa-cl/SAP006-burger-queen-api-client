import { getProducts, sendOrder } from "../../services/api";
import { useState, useEffect } from "react";
import { getRoleFromStorage } from "../../Utils/LocalStorage/LocalStorage";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsType, setProductsType] = useState('breakfast');
  const [addItem, setAddItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [flavor, setFlavor] = useState('');
  const [complement, setComplement] = useState('');
  const [message, setMessage] = useState('');
  const [orderInfo, setOrderInfo] = useState({ client: '', table: '' });
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const initialQtd = 1;

  const getData = async () => {
    const data = await getProducts('/products').then(data => data);
    setProducts(data);
  };

  useEffect(() => {
    return getData();
  }, []);

  const addProducts = (elem) => {
    setMessage('');
    const foundItem = addItem.findIndex((item) => item.name === elem.name && item.flavor === flavor && item.complement === complement);
    if (productsType === 'hamburguer') {
      if (flavor === '') {
        setMessage((productsType === 'hamburguer' ? 'Selecione um sabor primeiro' : null));
      } else if (flavor !== '' && foundItem !== -1) {
        addItem[foundItem].qtd++
        setAddItem([...addItem]);
      } else {
        if (complement !== '') {
          const newProduct = filterFlavor().filter((item) => item.name === elem.name && item.complement === complement);
          setAddItem(
            [...addItem,
            {
              id: newProduct[0].id,
              qtd: initialQtd,
              name: elem.name,
              price: newProduct[0].price,
              flavor: flavor,
              complement: complement
            }])
        } else {
          setAddItem(
            [...addItem,
            {
              id: elem.id,
              qtd: initialQtd,
              name: elem.name,
              price: elem.price,
              flavor: flavor,
              complement: complement
            }]);
        }
      }
      setComplement('');
      setFlavor('');
    }
    if (productsType !== 'hamburguer') {
      setMessage('');
      if (foundItem !== -1) {
        addItem[foundItem].qtd++
        setAddItem([...addItem]);
      } else {
        setAddItem(
          [...addItem,
          {
            id: elem.id,
            qtd: initialQtd,
            name: elem.name,
            price: elem.price,
            flavor: flavor,
            complement: complement
          }]);
      }
    }
  };

  const deleteProducts = (elem) => {
    const foundItem = addItem.findIndex((item) => item.id === elem.id);
    if (foundItem !== -1) {
      const qtd = addItem[foundItem].qtd
      if (qtd === 1) {
        const removed = addItem
        removed.splice(foundItem, 1)
        setAddItem([...removed])
      } else {
        const newArray = addItem;
        newArray[foundItem].qtd--;
        setAddItem([...newArray])
      }
    } else {
      setAddItem(
        [...addItem,
        {
          id: elem.id,
          qtd: initialQtd,
          name: elem.name,
          price: elem.price,
          flavor: elem.flavor
        }]);
    }
  };

  useEffect(() => {
    const sum = (previousValue, currentValue) => previousValue + currentValue;
    setTotal(() => {
      const price = addItem.map((elem) => elem.qtd * elem.price);
      return price.reduce(sum, 0);
    })
  }, [addItem]);

  const filterFlavor = () => products.filter((elem) => elem.flavor !== null && elem.flavor === flavor);

  const selectFlavor = (e) => setFlavor(e.target.value);

  const selectComplement = (e) => setComplement(e.target.value);

  const handleButtonTypeClick = (e) => setProductsType(e.target.value);
  


  const productsFiltered = () => {
    if (productsType === 'hamburguer') {
      return products.filter((elem) => elem.id === 33 || elem.id === 42);
    } else {
      return products.filter((elem) => elem.sub_type.includes(productsType));
    }
  };


  const handleOrderChange = (e) => {
    setMessage('');
    return setOrderInfo(() => {
      const auxValues = { ...orderInfo };
      auxValues[e.target.name] = e.target.value;
      return auxValues;
    });
  };

  const sendToKitchen = () => {
    if (getRoleFromStorage() === 'attendant') {
      sendOrder('/orders', orderInfo, addItem)
        .then((res => res.json()))
        .then((data) => {
          if (data.code === 400) {
            setMessage(() => 'Preencha os campos com as informações do cliente');
          } else {
            setMessage(() => 'Pedido enviado para a cozinha com sucesso');
            setAddItem([]);
          }
        });
    } else {
      setModalMessage('Apenas um atendente pode enviar um pedido para a cozinha');
      setOpenModal(true);
    }
  };

  return {
    handleButtonTypeClick,
    productsFiltered,
    setAddItem,
    addItem,
    total,
    sendToKitchen,
    handleOrderChange,
    addProducts,
    deleteProducts,
    selectComplement,
    selectFlavor,
    flavor,
    complement,
    productsType,
    message,
    modalMessage,
    openModal,
    setOpenModal
  };
}

export default useProducts;