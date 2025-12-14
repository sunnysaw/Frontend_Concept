const NameHoc = (OldComponent) => {
  return function EnhanceComponent() {
    return <OldComponent name="sunny:" />;
  };
};

export default NameHoc;



// Flow of Execution of HOC's

// const HOC = (Component) => {
//   return function (props) {
//     return <Component {...props} />;
//   };
// };


