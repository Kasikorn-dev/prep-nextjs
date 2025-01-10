import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useUsers = () => {
  const queryClient = useQueryClient();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('/api/users');
      return res.json();
    },
  });

  const createUser = useMutation({
    mutationKey: ['mutation users'],
    mutationFn: async (newUser) => {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      return res.json();
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });

  return { data, error, isLoading, createUser };
};
