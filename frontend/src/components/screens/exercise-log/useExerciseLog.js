import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import ExerciseLogService from '../../../services/exercise/exercise-log.service'

export const useExerciseLog = () => {
	const { id } = useParams()
	
	const {
		data: exerciseLog,
		isLoading,
	} = useQuery(['get exercise log', id], () => 
		ExerciseLogService.getById(id), {
		select: ({ data }) => data
	})
	
	const { mutate } = useMutation(
		['complete log'],
		body => ExerciseLogService.complete(id, body),
		{
			onSuccess: ({ data }) => {
				data.isCompleted
			}
		}
	)

	return {
		isLoading,
		mutate,
		exerciseLog,
		id
	}
}