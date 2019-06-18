 ## Description

 Four methods are exposed in total
 1. Provider
 2. createStore
 3. combineReducer
 4. connect


### Provider

The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function

```javascript
<Provider store={store}>
    <App />
</Provider>
```


### createStore

This function is used to create the store object. Takes root reducer as a argument

```javascript
const store = createStore(rootReducer)
```

### combineReducer

this function is to combine all the reducers togather and generate a rootReducer for whole app

```javascript
const rootReducer = combineReducers({
  incident: incidentReducer,
})
```

### connect

this function is pass down the state and actions as props to the component.

```javascript
const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    addIncident,
  }
}

const mapStateToProps = ({ incident }) => {
  return {
    inProgress: incident.inProgress,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateIncident)
```
