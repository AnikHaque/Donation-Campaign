import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const DonationsList = ({ donations }) => {
    const { id, picture, title, category, category_bg, card_bg,text_and_button_bg,description,price } = donations;
    
   
    return (
        // <div className="card card-compactshadow-xl" style={{ backgroundColor: `${card_bg}`  }}>
        //     <figure><img src={picture} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{title}</h2>
        //         <p>{description}</p>
        //         <div>
        //             <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{category}</button>
        //             <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{price}</button>
        //         </div>
        //         <div className="mt-4 flex">
        //             <h2 className="flex mr-4"><MdLocationOn className="text-2xl mr-2"></MdLocationOn> </h2>
        //             <h2 className="flex"> <AiOutlineDollar className="text-2xl"></AiOutlineDollar> </h2>
        //         </div>
        //         <div className="card-actions">
        //             <Link to={`/job/${id}`}>
        //                 <button className="btn btn-primary">View Details</button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>

//         <div>
//             <Link to={`/donation/${id}`}>
//                        <div className="card lg:max-w-lg" style={{ backgroundColor: `${card_bg}`  }}>
//   <figure><img src={picture} alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title" style={{ color: `${text_and_button_bg}`  }}>{category}</h2>
//     <p style={{ color: `${text_and_button_bg}`  }}>{title}</p>
//   </div>
// </div>
//             </Link>
 
//         </div>
<div>
    <Link to={`/donation/${id}`}>
      <div className="max-w-xs rounded-md" style={{ backgroundColor: `${card_bg}`  }}>
	<img src={picture} alt="" className="object-cover object-center w-full rounded-t-md h-52 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className=" font-semibold tracki" style={{ color: `${text_and_button_bg}`  }}>{category}</h2>
			<p className="text-xl" style={{ color: `${text_and_button_bg}`  }}>{title}</p>
		</div>
	</div>
</div>
    </Link>
  
</div>
    );
};

export default DonationsList;