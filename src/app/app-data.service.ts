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
                        'imageUrl': 'http://www.oreo.co.uk/~/media/oreo/couk/images/page/products/description/oreo-mini-tub/oreo-mini-tub-w720.png',
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
                        'name': 'Clif Bar',
                        'imageUrl': 'https://a2cf4fa39d1096849525-c9e74d9e365a688b9dfb3e01b6ac4867.ssl.cf5.rackcdn.com/cloud_images/FL_THUMB_NBFcpb_R4_250x350_v2.png',
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
                        'imageUrl': 'http://www.myglutenfreereview.com/wp-content/uploads/2014/02/8ozGFMini_New_2ca193397e581fd34ba47af650dab7c3.png',
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
                        'name': 'Extra Polar Ice Chewing Gum',
                        'imageUrl': 'https://www.usacandywholesale.com/media/catalog/product/cache/1/small_image/300x400/9df78eab33525d08d6e5fb8d27136e95/e/x/extra_polar_ice.png',
                        'price': .50,
                        'quantity': 5
                    }
            },]
        }];


        return { MACHINES };
    }
}
