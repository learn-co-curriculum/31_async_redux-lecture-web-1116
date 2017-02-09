const props = Object.assign(props, mapStateToProps(store.getState))
const propsWithDispatch = Object.assign(props, {dispatch: store.dispatch.bind(store) })
React.createElement(WrappedComponent, propsWithDispatch )
