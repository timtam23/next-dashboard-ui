import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between item-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/10
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1>1,234</h1>
      <h2>{type}</h2>
    </div>
  );
};

export default UserCard;
