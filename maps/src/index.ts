import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

// const user = new User();
// const company = new Company();

// console.log(user);
// console.log(company);
const user = new User();
const company = new Company();
const customMap = new CustomMap('map');
// console.log(user.markerContent());
// console.log(user.location.lat);
// console.log(user.location.lng);
console.log(company.markerContent());
// console.log(company.location.lat);
// console.log(company.location.lng);
// new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
