export default function HomeSection({ title, text }) {
  return (
    <div class="col-span-4 w-full h-full ">
      <div class="w-full h-full rounded-md p-2 md:pl-4">
        <h1 class="text-white text-xl font-medium py-2">{title}</h1>
        <p class="text-gray-100 sm:text-sm text-xs">{text}</p>
      </div>
    </div>
  );
}
