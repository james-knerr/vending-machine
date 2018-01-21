import { InMemoryDbService } from 'angular-in-memory-web-api';

import { MachineVM, MachineSlotVM } from './shared.module/models/machine-vm';
import { ProductVM, ProductDetailsVM } from './shared.module/models/product-vm';

export class AppDataService implements InMemoryDbService {
    createDb() {
        const MACHINES = [{
            'id': '1',
            'name': 'Snack Machine',
            'slots': [{
                'id': '1',
                'code': 'A1',
                'assignedProduct':
                    {
                        'id': '1',
                        'name': 'Lay\'s Potato Chips',
                        'imageUrl': 'http://origin-www.fritolay.com/images/default-source/blue-bag-image/lays-classic.png?sfvrsn=bd1e563a_2',
                        'price': 1.75,
                        'quantity': 6
                    }
            },
            {
                'id': '2',
                'code': 'A2',
                'assignedProduct':
                    {
                        'id': '1',
                        'name': 'Lay\'s Potato Chips',
                        'imageUrl': 'http://origin-www.fritolay.com/images/default-source/blue-bag-image/lays-classic.png?sfvrsn=bd1e563a_2',
                        'price': 1.75,
                        'quantity': 5
                    }
            },
            {
                'id': '3',
                'code': 'A3',
                'assignedProduct':
                    {
                        'id': '2',
                        'name': 'Crunchy Cheetos',
                        'imageUrl': 'http://origin-www.fritolay.com/images/default-source/blue-bag-image/cheetos-crunchy-cheese.png?sfvrsn=5951573a_2',
                        'price': 1.55,
                        'quantity': 4
                    }
            },
            {
                'id': '4',
                'code': 'B1',
                'assignedProduct':
                    {
                        'id': '3',
                        'name': 'Cheddar & Jalepeno Crunchy Cheetos',
                        'imageUrl': 'http://origin-www.fritolay.com/images/default-source/blue-bag-image/cheetos-crunchy-jalapeno-cheddar.tmb-.png?sfvrsn=6b51573a_1',
                        'price': 1.75,
                        'quantity': 6
                    }
            },
            {
                'id': '5',
                'code': 'B2',
                'assignedProduct':
                    {
                        'id': '4',
                        'name': 'Mini Oreos',
                        'imageUrl': 'http://www.nationwidecandy.com/mmCANDY/Images/015910-Mini-Oreo-Bite-Size-Cookies.jpg',
                        'price': 0.75,
                        'quantity': 6
                    }
            },
            {
                'id': '6',
                'code': 'B3',
                'assignedProduct':
                    {
                        'id': '5',
                        'name': 'Fritos',
                        'imageUrl': 'http://origin-www.fritolay.com/images/default-source/blue-bag-image/fritos-original.png?sfvrsn=b704563a_2',
                        'price': 1.25,
                        'quantity': 6
                    }
            },
            {
                'id': '7',
                'code': 'C1',
                'assignedProduct':
                    {
                        'id': '6',
                        'name': 'Crunchy Peanut Butter Clif Bar',
                        'imageUrl': 'https://images-na.ssl-images-amazon.com/images/I/71moMmVdABL._SL1500_.jpg',
                        'price': .95,
                        'quantity': 5
                    }
            },
            {
                'id': '8',
                'code': 'C2',
                'assignedProduct':
                    {
                        'id': '7',
                        'name': 'Mini Pretzels',
                        'imageUrl': 'https://images-na.ssl-images-amazon.com/images/I/51Kh6izjlsL._SY355_.jpg',
                        'price': 1.25,
                        'quantity': 0
                    }
            },
            {
                'id': '9',
                'code': 'C3',
                'assignedProduct':
                    {
                        'id': '8',
                        'name': 'Doublemint Gum',
                        'imageUrl': 'http://www.chewinggumfacts.com/images/chewinggumfacts/wrigleys-doublemint-small.jpg',
                        'price': .50,
                        'quantity': 5
                    }
            },]
        }];


        return { MACHINES };
    }
}
