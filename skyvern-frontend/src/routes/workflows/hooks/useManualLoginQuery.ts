import { getClient } from "@/api/AxiosClient";
import { useCredentialGetter } from "@/hooks/useCredentialGetter";
import { useQuery } from "@tanstack/react-query";

function useManualLogin() {
  const credentialGetter = useCredentialGetter();

  return useQuery<string>({
    queryKey: ["manual-login"],
    queryFn: async () => {
      const client = await getClient(credentialGetter);

      const response = await client.post("/manual-login");

      return response.data as string;
    },
    // You can control when it runs — or set to false and call manually
    // enabled: false,
  });
}

export { useManualLogin };
