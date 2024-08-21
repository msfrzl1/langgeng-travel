import axios from "axios";

export default function useAuth() {
  const auth = async (url, body) => {
    try {
      const response = await axios.post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/${url}`,
        body,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      return { data: response.data, status: response.status };
    } catch (error) {
      return { data: error.response.data, status: error.response.status };
    }
  };

  return { auth };
}
