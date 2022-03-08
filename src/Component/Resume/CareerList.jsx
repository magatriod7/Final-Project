import styled from "@emotion/styled";

const StyleDiv = styled.div`
  // display: flex;
  // padding: 5px 0;
  padding: 32px 40px 16px;
`;

const ListNameDiv = styled.div`
  // font-size: 29px;
  // font-weight: bold;
  // padding: 24px 96px 24px 0;
  // border-top: 3px solid #39c761;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(57, 199, 97, 1);
`;

const InnerListWrapDiv = styled.div`
  // display: block;
  // padding: 15px 0;
  // border: 1px solid black;
`;

const InnerListDiv = styled.div`
  // padding: 15px;
  // border: 1px solid red;
  padding-bottom: 16px;
  margin-top: 24px;
`;

const StyleDiv2 = styled.div`
  // font-weight: 600;
  // font-size: 21px;

  padding-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    span:last-child {
      padding-left: 8px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(0, 0, 0, 0.73);
    }
  }
  span:first-of-type {
    font-family: Pretendard Variable;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 1);
  }
`;

const StyleDepartmentDiv = styled.div`
  // color: rgba(0, 0, 0, 0.56);
  // margin-top: 4px;
  // font-weight: 500;
  // span {
  //   font-weight: 600;
  //   font-size: 14px;
  //   padding-left: 10px;
  // }
  > span {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 0.73);
    padding-left: 24px;
    padding-top: 4px;
  }
  > div {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 0.73);
    padding-left: 24px;
    padding-top: 16px;
    margin: 0;
    width: 75%;
  }
`;

export const CareerList = ({ careerListInfo }) => {
  const { list, name } = careerListInfo;

  return (
    <StyleDiv>
      <ListNameDiv>{name}</ListNameDiv>
      <InnerListWrapDiv>
        {list.map((item) => (
          <InnerListDiv key={item.id}>
            <StyleDiv2>
              <div>
                <span>{item.company}</span>
                <span>
                  {item.startDate}-{item.endDate}
                </span>
              </div>
              {/* <span>{item.company}</span>&nbsp;
              <span>{item.department}</span>&nbsp;
              <span>{item.position}</span> */}
            </StyleDiv2>
            <StyleDepartmentDiv>
              <span>{item.department}</span>
              <span>{item.position}</span>
              <div>
                {item.duties.map((data, index) =>
                  item.duties.length - 1 === index ? (
                    <span key={data}>{data}</span>
                  ) : (
                    <span key={data}>{data}, </span>
                  )
                )}
              </div>
            </StyleDepartmentDiv>
          </InnerListDiv>
        ))}
      </InnerListWrapDiv>
    </StyleDiv>
  );
};
