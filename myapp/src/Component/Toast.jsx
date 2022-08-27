import { useToast } from '@chakra-ui/react';


function toastExample() {
    const toast = useToast()

    return (
      <Button
        onClick={() =>
          toast({
            title: 'Sucess',
            description: "Item Added To Cart",
            status: 'success',
            duration: 1000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    )
  }