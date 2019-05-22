import React from "react";
import { Divider, Progress } from "antd";
import StatusWrapper from "./style";

const Status = ({ stats }) => {
  return (
    <StatusWrapper>
      {stats.map(item => (
        <div className="item-status">
          {item.stat.name}
          <Progress percent={item.base_stat} showInfo={false} />
        </div>
      ))}
    </StatusWrapper>
  );
};

export default Status;
