import drparveen from '../assests/parveen.webp'
import drrohit from '../assests/rohit.webp'
import drmanish from '../assests/manish.jpg'
import drpuneet from '../assests/puneet.jpg';
import drsiddartha from '../assests/siddartha.jpg'


export const Neurology = () => {
    const neurology = [
        {
            "id": 1,
            "name": "Dr. Praveen Gupta",
            image:drparveen,
            "specialization": "Neurology",
             "Address": "Gurugram, Haryana",
             "phone": "098919 07903",
        },
        {
            "id":2,
            "name": "Dr Sumeet Dhawan",
             image:'',
             "specialization": "Neurology",
             "Address": "Yamuna Nagar, Haryana",
             "phone": "082085 37763",
        },
        {
            "id":3,
            "name": "Dr. (Prof.) Rohit Gupta",
             image: drrohit,
             "specialization": "Neurology",
             "Address": "Faridabad, Haryana",
             "phone": " 097180 44428",
        },
        {
            "id":4,
            "name":"Dr. Puneet Agarwal",
            image: drpuneet,
            "specialization": "Neurology",
            "Address": "New Delhi, Delhi",
            "phone": " 099716 58543",
        },
        {
            "id":5,
            "name": "Dr Siddartha Reddy ",
            image: drsiddartha,
            "specialization": "Neurology",
            "Address": "Madeenaguda,Hyderabad, Telangana",
            "phone": "  040 4189 4777",
        },{
            "id":6,
            "name": "Dr Manish Mitta",
            image: drmanish,
            "specialization": "Neurology",
            "Address": "Dehradun, Uttarakhand",
            "phone": "   094117 57800",
        }

    ]
    return (
        
         <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            padding: '20px',
            justifyItems: 'center'
        }}>
            {neurology.map((doctor) => (
                <div key={doctor.id} style={{
                    width: '100%',
                    maxWidth: '400px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff'
                }}>
                    <img src={doctor.image} alt={doctor.name} style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                    }} />
                    <div style={{ padding: '10px' }}>
                        <h3 style={{ margin: '10px 0' }}>{doctor.name}</h3>
                        <p><strong>Specialization:</strong> {doctor.specialization}</p>
                        <p><strong>Address:</strong> {doctor.Address}</p>
                        <p><strong>Phone:</strong> {doctor.phone}</p>
                    </div>
                </div>
            ))}
        </div>
        
        
    );
}