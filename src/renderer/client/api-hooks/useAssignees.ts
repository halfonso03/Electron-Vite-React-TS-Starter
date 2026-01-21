// import { useQuery } from "@tanstack/react-query";
// import agent from "../agent";

import { AssigneeDto } from "@common/assignee";
import { useState } from "react";

export const useAssignees = () => {


    const [assignees, setAssignees] = useState<AssigneeDto[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const getAssignees = () => {

        setIsLoading(true);

        window.electronAPI
            .getAssignees()
            .then((response) => {
                console.log('response.data', response.data as AssigneeDto[])
                setAssignees(response.data as AssigneeDto[]);
                setIsLoading(false);

            })
            .catch((err) => {
                setIsLoading(false);

                console.log('err', err);
            }).finally(() => {
                setIsLoading(false);
            });
    }



    return { getAssignees, loadingAssignees: isLoading, assignees }
}