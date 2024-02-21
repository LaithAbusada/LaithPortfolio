import { Flex } from "antd";


export const SkillCarouselItem = ({title,imgUrl}) => {

    return (
        <Flex justify="center" align="center">
        <img
          style={{ width: "100px", height: "100px" }}
          alt=""
          src={imgUrl}
        />
      </Flex>
    )

}