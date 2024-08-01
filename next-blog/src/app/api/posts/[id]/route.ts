export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const path =
      type === "ne" ? `posts?id_ne=${params.id}` : `posts/${params.id}`;

    const response = await fetch(`http://localhost:5500/${path}`);
    const data = await response.json();
    return Response.json(data);
  } catch (e) {
    if (e instanceof Error) {
      return Response.json({ message: e.message, status: false });
    }
    return Response.json({
      message: "알 수 없는 오류가 발생했습니다.",
      status: false,
    });
  }
}
