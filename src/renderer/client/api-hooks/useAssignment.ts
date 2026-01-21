
import type { AssigneeFormData } from "../form-validation-schemas/personSchema";

const useAssignments = () => {

	// 	const createAssignee = useMutation({
	// 		mutationFn: async (data: AssigneeFormData) => {
	// 			const response = await agent.post(`inventory/assignee/add`, data);
	// 			return response.data;
	// 		},
	// 		onSuccess: (createdAssignee: Person) => {
	// 			console.log('createdAssignee', createdAssignee)
	// 			queryClient.setQueryData(["people"], (old: Person[]) => [
	// 				...old,
	// 				createdAssignee,
	// 			]);
	// 		},
	// 	});

	const createAssignee = {};

	return { createAssignee };
};

export default useAssignments;
