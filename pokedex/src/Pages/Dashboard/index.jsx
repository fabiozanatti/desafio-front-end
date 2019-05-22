import React from "react";
import DashboardProvider from "./Context/DashboardProvider";
import { Tabs } from "antd";
import LocalizarPokemons from "../../Containers/LocalizarPokemons";
import TodosPokemons from "../../Containers/TodosPokemons";

const TabPane = Tabs.TabPane;

const Dashboard = () => {
  return (
    <DashboardProvider.Consumer>
      {() => (
        <Tabs>
          <TabPane tab="Capiturar Pokemons" key="1">
            <LocalizarPokemons />
          </TabPane>
          <TabPane tab="Meus Pokemons" key="2">
            <TodosPokemons />
          </TabPane>
        </Tabs>
      )}
    </DashboardProvider.Consumer>
  );
};

export default Dashboard;
