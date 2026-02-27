import Background from "./component/Background"
import Content from "./component/Content"
import SocialIcon from "./component/SocialIcon"
import ToolTip from "./component/ToolTip"
function App() {
  return (
    <>
      <div className="p-3 md:py-8 md:px-24">
        <Background />
        <SocialIcon />
        <ToolTip />
        <Content />
      </div>
    </>
  )
}

export default App