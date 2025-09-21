const apiServices = {
  get: async function (url: string): Promise<any> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    try {
      return await response.json();
    } catch {
      return {}; // fallback jika response kosong
    }
  },

  post: async function (url: string, data: any): Promise<any> {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // tangani error HTTP
    if (!response.ok) {
      let errorData = {};
      try {
        errorData = await response.json();
      } catch {}
      return errorData; // kembalikan data error dari backend
    }

    try {
      return await response.json();
    } catch {
      return {}; // fallback jika response kosong
    }
  },
};

export default apiServices;
