(() => {

    interface Product {
        id: number;
        name: string;
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recordar: Podemos tener muchas vistas que realicen este mismo trabajo.

    class ProductService {

        private httpAdapter: Object;

        getProduct(id: number) {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product);
        }
    }

    class Mailer {
        private email: string;
        private masterEmail: string = "email@google.com";

        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', template);
        }
    }

    //Esquematizar logica
    class ProductBloc { //agrupador de la logica de negocio para agrupar

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }
        loadProduct(id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct(id);
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }

        notifyClients() {
            this.mailer.sendEmail(['eduardo@jotmail'], 'to-clients');
        }

        //No hay una relación directa con productos (si indirecta)

    }

    class CartBloc { //productos que estan en el carrito
        private items: Object[] = [];

        addToCart(productId: number) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId);
        }

    }

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);

})();