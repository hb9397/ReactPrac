import ColorContext from "../contexts/color";

const ColorBox = () => {
    return (

        // color.js에서 가져온 공유 데이터 ColorContext를 사용하라면 부모 태그를 <가져온 공유데이터.Consumer>로 감싸면 그 내부에서는
        // 가져온 공유 데이터를 사용할 수 있다.
        <ColorContext.Consumer>
            {value => (<div style={{
                width: '64px',
                height: '64px',
                background: value.color
            }} />)
            }
        </ColorContext.Consumer>
    )
}

export default ColorBox