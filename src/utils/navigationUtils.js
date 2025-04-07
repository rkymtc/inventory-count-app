import { CommonActions } from '@react-navigation/native';

let _navigator;

export function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

export function navigate(routeName, params) {
  if (_navigator) {
    _navigator.dispatch(
      CommonActions.navigate({
        name: routeName,
        params,
      })
    );
  } else {
    console.warn('Navigation referansı ayarlanmamış. Önce setTopLevelNavigator çağrılmalı.');
  }
}


export function goBack() {
  if (_navigator) {
    _navigator.dispatch(CommonActions.goBack());
  } else {
    console.warn('Navigation referansı ayarlanmamış. Önce setTopLevelNavigator çağrılmalı.');
  }
}


export function resetAndNavigate(routeName, params) {
  if (_navigator) {
    _navigator.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: routeName, params }],
      })
    );
  } else {
    console.warn('Navigation referansı ayarlanmamış. Önce setTopLevelNavigator çağrılmalı.');
  }
} 