import React from "react";
import { Input} from "antd";
const { Search } = Input;

export const SearchBox = ({handleChange,searchValue}) => {
  return (
    <div className="mt-5 px-32">
      <Search className=" w-9/12 shadow-md"
        placeholder="Search Blogger by name e.g Susan"
        allowClear
        enterButton="Search"
        size="large"
        onChange={handleChange}
        onSearch={searchValue}
      />
    </div>
  );
};
