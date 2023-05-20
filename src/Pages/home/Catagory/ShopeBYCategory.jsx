import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";

const ShopeBYCategory = () => {
    const [toys, setToys] = useState([]);
    const [category, setCategory] = useState("Baby doll");
    useEffect(() => {
        fetch(
            `http://toy-mart-server-rho.vercel.app/toyByCategory/${category}`
        )
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    }, [category]);
    return (
        <div className="my-14">
            <Tabs>
                <TabList>
                    <Tab onClick={() => setCategory("Baby doll")}>
                        Baby doll
                    </Tab>
                    <Tab onClick={() => setCategory("Barbie Doll")}>
                        Barbie Doll
                    </Tab>
                    <Tab onClick={() => setCategory("American Girl")}>
                        American Girl
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-2 gap-8 mt-5">
                        {toys.map((toy) => (
                            <ToyCard key={toy?._id} toy={toy}></ToyCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-2 gap-8 mt-5">
                        {toys.map((toy) => (
                            <ToyCard key={toy?._id} toy={toy}></ToyCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-2 gap-8 mt-5">
                        {toys.map((toy) => (
                            <ToyCard key={toy?._id} toy={toy}></ToyCard>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopeBYCategory;
