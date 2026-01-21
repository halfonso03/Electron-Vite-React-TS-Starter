import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AssigneeFormData } from "../form-validation-schemas/assigneeSchema";
import { AddAssigneeDto, AssigneeDto } from "@common/assignee";


const useAssignments = () => {
	const queryClient = useQueryClient();

	const createAssignee = useMutation({
		mutationFn: async (data: AssigneeFormData) => {

			const addAssigneeDto: AddAssigneeDto = {
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				extension: data.extension,
				locationName: data.locationName,
				assigneeTypeId: data.assigneeTypeId!
			};
			// const response = await agent.post(`inventory/assignee/add`, data);

			console.log('addAssigneeDto', addAssigneeDto)

			const response = await window.electronAPI.addAssignee(addAssigneeDto)

			return response.data as AssigneeDto;
		},
		onSuccess: (createdAssignee: AddAssigneeDto) => {

			console.log('createdAssignee', createdAssignee);

			queryClient.setQueryData(["assignees"], (old: AssigneeDto[]) => [
				...old,
				createdAssignee,
			]);
		},
	});

	const { data: assignees, isLoading: loadingAssignees } = useQuery({
		queryKey: ['assignees'],
		queryFn: async () => {
			const response = await window.electronAPI.getAssignees();
			const data = response.data!;
			return data!;
		}
	})

	return { createAssignee, assignees, loadingAssignees };
};

export default useAssignments;
