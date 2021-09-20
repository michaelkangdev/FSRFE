import React from "react";
import { Header, List } from 'semantic-ui-react';


export const Jobs = ({jobs}) => {
    return (
        <List>
            {jobs.map(job => {
                return (
                    

                    <List.Item key = {job.id}>
                        <Header> {job.title} </Header>

                    </List.Item>
                )
            })}
        </List>
    )

};