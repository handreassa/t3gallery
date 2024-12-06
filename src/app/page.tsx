import { url } from "inspector";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/Tah2FqtrWlOJuXhAVouH0wpnHGQ7AYhjUPLVINsx5mqJuvbX",
  "https://utfs.io/f/Tah2FqtrWlOJ0rJndurBCKRZL4YPtvl5mNczVAfBEDIJew2a",
  "https://utfs.io/f/Tah2FqtrWlOJB9QmoYTt4yubfgFra59kJm7PNpd8vcUCS1eW",
  "https://utfs.io/f/Tah2FqtrWlOJuXhAVouH0wpnHGQ7AYhjUPLVINsx5mqJuvbX",
  "https://utfs.io/f/Tah2FqtrWlOJB9QmoYTt4yubfgFra59kJm7PNpd8vcUCS1eW",
  "https://utfs.io/f/Tah2FqtrWlOJuXhAVouH0wpnHGQ7AYhjUPLVINsx5mqJuvbX",
  "https://utfs.io/f/Tah2FqtrWlOJ0rJndurBCKRZL4YPtvl5mNczVAfBEDIJew2a",
  "https://utfs.io/f/Tah2FqtrWlOJB9QmoYTt4yubfgFra59kJm7PNpd8vcUCS1eW",
];

const mockImages = mockUrls.map((url, index) => ( {
  id: index +1,
  url
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-2 justify-center items-center mt-5">
        { mockImages.map((image) => (
          <div key={image.id} className="w-1/4 sm:w-1/4 md:w-1/6 p-3">
            <img src={image.url} className="w-60 h-40" />
          </div>
        ))
        }
      </div>
       
    </main>
  );
}
