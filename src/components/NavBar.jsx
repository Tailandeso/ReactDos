import React from 'react';
import CartWidget from './CartWidget';
import {
  Box,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Divider,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon, ChevronDownIcon  } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import './Styles/NavBar.css';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: 'Cámaras', link: '/categoria/camara' },
    { id: 2, name: 'Lentes', link: '/categoria/lente' },
    { id: 3, name: 'Baterías', link: '/categoria/bateria' },
  ];

  const handleCategoryChange = (selectedCategory) => {
    navigate(selectedCategory);
    onClose();
  };

  return (
    <div className='navbar'>
      <IconButton
        color='black'
        borderColor='black'
        size='md'
        aria-label='Options'
        icon={<HamburgerIcon fontSize='2xl' />} 
        variant='outline'
        onClick={onOpen}
      />
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg='black' color='#fff' borderRadius='10px'>
          <DrawerHeader borderBottomWidth='5px'>Menú</DrawerHeader>
          <DrawerBody>
            <Link to={"/"}>
              <Box
                as="button"
                fontSize='lg'
                textAlign="center"
                width="100%"
                py={2}
                mb={4}
                onClick={onClose}
                _hover={{ background: 'white', color:'black'}}
              >
                Inicio
              </Box>
            </Link>
            <Divider />
            <Center>
              <Menu>
              <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            mt={4}
            bg='white' 
            color='black' 
            borderRadius='5px' 
          >
                  Categorías
                </MenuButton>
                <MenuList bg='#0f0f0fdc;' >
                  {categories.map((category) => (
                                  <MenuItem
                                  key={category.id}
                                  onClick={() => handleCategoryChange(category.link)}
                                  bg='#0f0f0fdc;' 
                                  color='white' 
                                  _hover={{ background: '#fdcb00', color:'black'}}
                                >
                      {category.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Center>
            <Divider mt={4} />
            <Link to={"/carrito"}>
              <Box
                as="button"
                fontSize='lg'
                textAlign="center"
                width="100%"
                py={2}
                mb={4}
                onClick={onClose}
                _hover={{ background: 'white', color:'black'}}
              >
                Carrito
              </Box>
            </Link>
            <Divider mt={4} />
            <Box
              as="button"
              fontSize='lg'
              textAlign="center"
              width="100%"
              py={2}
              onClick={onClose}
              _hover={{ background: 'white', color:'black'}}
            >
              Contacto
            </Box>
            <Divider mt={4} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Link to={"/"}>
        <img src={"./img/logosonyblanco.png"} alt="Logo de la Tienda" className="logo-tienda" />
      </Link>
      <Link to={"/carrito"}>
        <div className="cart-widget">
          <CartWidget />
          <p>(3)</p>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;