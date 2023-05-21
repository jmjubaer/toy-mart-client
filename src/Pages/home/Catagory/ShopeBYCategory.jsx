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
            <div className="text-center relative">
                <h2 className="text-3xl sm:text-5xl font-bold">Available Products</h2>
                <p className="text-lg sm:w-3/5 mx-auto mt-3">Delight in a selection of dolls, dollhouses, and accessories for imaginative play</p>
                <div className="w-28 h-1 bg-[#ff6898d2] absolute -bottom-3 left-1/2 -translate-x-1/2"></div>
            </div>
            <Tabs>
                <div className="text-center rounded-full border mx-auto shadow-xl p-3 md:p-5 w-fit border-[#ff6899] my-10">
                <TabList className=" border-none jm_tab">
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
                </div>

                <TabPanel>
                    <div className="grid md:grid-cols-2 gap-8 mt-5">
                        {toys.map((toy) => (
                            <ToyCard key={toy?._id} toy={toy}></ToyCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 gap-8 mt-5">
                        {toys.map((toy) => (
                            <ToyCard key={toy?._id} toy={toy}></ToyCard>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 gap-8 mt-5">
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
