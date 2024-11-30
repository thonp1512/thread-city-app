import { CommonActions, createNavigationContainerRef, StackActions } from "@react-navigation/native";


export const navigationRef = createNavigationContainerRef();

export function requestNavigate(name: string, params= {}){
  
 navigationRef.current?.dispatch(
    CommonActions.navigate({name, params: params})
 )
}
export function requestPush(name: string, params = {}) {
    navigationRef.current?.dispatch(StackActions.push(name, params));
  }
  
  export function requestReplaceRoute(name: string, params = {}) {
    navigationRef.current?.dispatch(StackActions.replace(name, params || {}));
  }
  
  export function requestNavigateBack() {
    navigationRef.current?.dispatch(CommonActions.goBack());
  }
  
  export function requestPopToTop() {
    navigationRef.current?.dispatch(StackActions.popToTop());
  }
  
  export function requestPop(count: number) {
    navigationRef.current?.dispatch(StackActions.pop(count));
  }
  
//   export function resetStackNavigate(
//     index: number = 0,
//     name: Routes = Routes.LOGIN,
//   ) {
//     navigationRef.current?.dispatch(
//       CommonActions.reset({
//         index: index,
//         routes: [
//           {
//             name: name,
//           },
//         ],
//       }),
//     );
// }