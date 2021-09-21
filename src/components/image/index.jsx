export const Image = ({ src, alt, ...rest }) => {
  return (
    <img
      {...rest}
      alt={alt}
      src={src}
      onError={(event) => {
        event.target.src =
          "https://i.pinimg.com/originals/23/a0/6d/23a06d60a48483d31ddb71aa353f10c0.jpg";
        event.onerror = null;
      }}
    />
  );
};
