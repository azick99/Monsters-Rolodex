import { ChangeEvent } from 'react';
import './search-box.styles.css';
// //Primitive varible type
// const name: string = 'azizbek'
// const age: number = 1231243
// // Function type 
// const func:(a:string, b:number, c: boolean)=> void = (a, b, c) => {}

//Two main type to use in Object
//first ==> 
// interface ISearchBoxProps extends IChangeHanlderPops{
//   className: string;
//   placeholder?:string;
// }
// interface IChangeHanlderPops{
//  onChangeHandler: (a: string) => void
// }
//second ==> similar to first
type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
//   Union Types
// // type CanadianAddress = {
// //   street: string;
// //   province: string;
// // }

// // type USAddress = {
// //   street: string;
// //   state:string;
// // }

// // type ItalianAddress = {
// //   street: string;
// //   region:string;
// // }
// // type NorthAmericanAddress = CanadianAddress | USAddress | ItalianAddress;
// // const Address: NorthAmericanAddress = {
// //   street: 'asdsasd',
// //  province: 'adsasd',
// // }


const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={(e) => onChangeHandler(e)}
  />
);

export default SearchBox;
