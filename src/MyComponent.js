// const MyComponent = () => {
//   return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

// export default MyComponent;
const MyComponent = (props) => {
    const {name, children} = props;
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다.
      <br />
      children 값은 {props.children}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
  children: "성성"
};

export default MyComponent;
