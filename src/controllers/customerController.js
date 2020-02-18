const  controller = {};

controller.list = (req ,res)=>{

    req.getConnection((err,conn)=>{

        conn.query('SELECT * FROM customer',(err,customers)=>{

            if (err){
                res.json(err);
            }
            console.log(customers);
            res.render('customer',{

                data:customers
            });
        });

    });
};
controller.save = (req ,res)=>{
    const data=req.body;
    req.getConnection((err,conn)=> {

        conn.query('INSERT INTO  customer SET ?', [data], (err, customers) => {


            console.log(customers);
            res.redirect('/');
        });
    });
};
controller.delete = (req ,res)=>{
    const  { id } = req.params;

    req.getConnection((err,conn)=>{

        conn.query('DELETE FROM customer WHERE id = ?',[id],(err,rows)=>{

            res.redirect('/');

        });
    })
};

controller.edit = (req , res)=>{
    const  { id } = req.params;
    req.getConnection((err,conn)=>{

        conn.query('SELECT * FROM customer WHERE id = ?',[id],(err,customers)=>{

            if (err){
                res.json(err);
            }
            console.log(customers);
            res.render('editCustomer',{

                data:customers

            });
        });

    });
};
controller.update =( req,res)=>{
    const  { id } = req.params;
    const  newCustomer = req.body;

    req.getConnection((err,conn)=> {

        conn.query('UPDATE customer SET ? WHERE id = ?', [newCustomer,id], (err, customers) => {

            if (err){
                res.json(err);
            }
            res.redirect('/');
        });
    });
    //res.send('Update');
};
controller.create =(req,res)=>{
    res.render('createCustomer');
};

module.exports = controller;
