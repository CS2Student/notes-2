// example of React inline-styles
const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontstyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2024</em>
    </div>
  )
}

export default Footer