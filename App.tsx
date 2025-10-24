import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React  from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from "@expo/vector-icons";
import { Video, ResizeMode } from 'expo-av';
import { useState, useRef } from 'react';
import { Card } from 'react-native-paper';



type RootStackParamList = {
  FirstAid: undefined;
  Sewing: undefined;
  Landscaping: undefined;
  LifeSkills: undefined;
  ChildMinding: undefined;
  Cooking: undefined;    
  GardenMaintenance: undefined;
  MainTabs:undefined;
  Course:undefined;
  
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color, size }) => (<FontAwesome name="home" size={30} color={'#000000'} />
        ),
      }}
      />
      <Tab.Screen name="Course" component={CourseScreen} options={{
        tabBarIcon: ({ color, size }) => (<FontAwesome name="book" size={30} color={'#000000'} />
        ),
      }}
      />
      <Tab.Screen name="Quote" component={QuoteScreen} options={{
        tabBarIcon: ({ color, size }) => (<FontAwesome name="calculator" size={30} color={'#000000'} />
        ),
      }}
      />
      <Tab.Screen name="About" component={AboutScreen} options={{
        tabBarIcon: ({ color, size }) => (<FontAwesome name="user" size={30} color={'#000000'} />
        ),
      }}
      />
      <Tab.Screen name="Contact" component={ContactScreen} options={{
        tabBarIcon: ({ color, size }) => (<FontAwesome name="phone" size={30} color={'#000000'} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }: { navigation: any }) {
  const [status, setStatus] = useState({});
  const video = useRef(null);

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={quoteStyles.header}>
        <View style={quoteStyles.headerContent}>
        <View style={quoteStyles.headerRow}>
        <Image source={require('./assets/IMG_20251018_130745 (1).jpg')} />
          <Text style={quoteStyles.headerTitle}>Empowering the Nation</Text>
          </View>
          <Text style={quoteStyles.headerSubtitle}> Empower Minds and Shape Futures</Text>
        </View>
      </View>
        <Card style={styles.card}>
          <Text style={styles.welcome}>Welcome from Precious Radebe</Text>
          <Text style={styles.since2022}>Uplifting domestic workers and gardeners through training skills since 2022</Text>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: 'https://media.istockphoto.com/id/1377336334/video/gardening-with-grandma.mp4?s=mp4-640x640-is&k=20&c=QDdHGxbEJSpcwA8ns3mB1_R3z89Yv5utJ1TPyYJ939A=',
            }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />

          <TouchableOpacity style={styles.courseButton}>
            <Text style={styles.courseButtonText} onPress={() => navigation.navigate('Course')} >View All Courses</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quoteButton} onPress={() => navigation.navigate('Quote')} >
            <Text>Get Quote</Text>
          </TouchableOpacity>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.mqa}>Mobile Quick Actions</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.coursetab}
              onPress={() => navigation.navigate('Course')} >
              <FontAwesome name="book" size={25} color="black" />
              <Text>Courses</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.quotetab}
              onPress={() => navigation.navigate('Quote')}>
              <FontAwesome name="calculator" size={25} color="black" />
              <Text>Quote</Text>
            </TouchableOpacity>
          </View>
        </Card>

      </ScrollView>
    </View>
  );
}

function AboutScreen({ navigation }: { navigation: any }) {
  return (
   <View style={styles.container}>
   <ScrollView>
    <View style={quoteStyles.header}>
        <View style={quoteStyles.headerContent}>
        
          <Text style={quoteStyles.headerTitle}>About Us</Text>
          <Text style={quoteStyles.headerSubtitle}>Our Story & Mission</Text>
        </View>
      </View>
      <Card style={styles.card}>
      <Text style={styles.mqa}>Mobile Founding Story</Text>
      <Image 
  source={{uri: 'https://i.pinimg.com/736x/07/4c/36/074c3657009f20fa39f82dd00098bbb1.jpg'}} 
  style={styles.images} 
/>
      <Text style={styles.nameOfFounder}>Precious Radebe</Text>
      <Text style={styles.position}>Founder & Director</Text>
      <Text style={styles.story}>Founded Empowering the Nation in 2022 to uplift domestic workers,Gardener and more through comprehensive skills training in Johannesburg</Text>
      <Text style={styles.quote}>Every Person Deserves the opportunity to grow and build a better future."</Text>

      <Text style={styles.mqa}>Mobile Mission and Vision Statements</Text>
      <Text style={styles.missionHeader}>Mission:</Text>
      <Text style={styles.mission}>Provide Accessible quality training that enhances employability and encourages entrepreneurship.</Text>
      <Text style={styles.visionHeader}>Vision:</Text>
      <Text style={styles.vision}>A future where everyone has skills and confidence for career success.</Text>
      </Card>
      <Card style={styles.card}>
      <Text style={styles.mqa}>Mobile Testimonials</Text>
      <Text>Student Reviews</Text>
      <Card style={styles.studentreview}>
      <View style={styles.row}>
     <Image 
  source={{uri:'https://i.pinimg.com/170x/c2/33/52/c23352c0ed0f35d8556fb1e872dfd6e0.jpg'}} 
  style={{height:30, width:30, borderRadius:100}} 
/>
      <Text style={styles.studentName}>Naledi M</Text>
      </View>
      <Text>I enjoyed doing my course here, it is very easy yet enjoyable to complete,the lecturers were very understanding and helpful as i completed my course here would 100% reccommend</Text>
      </Card>

      </Card>
      </ScrollView>
   </View>
  );
}
function ContactScreen({ navigation }: { navigation: any }) {
  const [text, onChangeText] = React.useState('');
  const [number,onChangeNumber]=React.useState('');

  
  return (
    <View style={styles.container}>
   <ScrollView>
      <View style={quoteStyles.header}>
        <View style={quoteStyles.headerContent}>
          <Text style={quoteStyles.headerTitle}>Contact Us</Text>
          <Text style={quoteStyles.headerSubtitle}>Get in Touch</Text>
           </View>
    </View>
         <Card style={styles.card}>
      <Text style={styles.mqa}>Mobile Contact Form</Text>
      <Text style={styles.startChat}>Send a Message</Text>
         <TextInput
          style={styles.contactInput}
          onChangeText={onChangeText}
          value={text}
          placeholder={'Name'}
        />
        <TextInput
         style={styles.contactInput}
          onChangeText={onChangeText}
          value={text}
          placeholder={'Email'}
        /><TextInput
         style={styles.contactInput}
          onChangeText={onChangeNumber}
          value={number}
          placeholder={'Phone Number'}
        />
        <TextInput
         style={styles.contactInput}
          onChangeText={onChangeText}
          value={text}
          placeholder={'Message'}
        />

        <TouchableOpacity
        style={styles.contactSendButton}>
        <Text style={styles.contactSendText}>Send Message</Text>
        </TouchableOpacity>
       </Card>
     
    <Card style={styles.card}>
    <Text style={styles.mqa}>mobile whatsapp contact</Text>
    <Image 
  source={{uri: 'https://pngimg.com/uploads/whatsapp/whatsapp_PNG21.png'}} 
  style={styles.contactImage} 
/>
 <Text style={styles.startChat}>Chat on whatsapp</Text>
    <TouchableOpacity style={styles.whatsappButton}>
    <Text>Start Chat</Text>
    </TouchableOpacity>
    </Card>
    </ScrollView>
    </View>
  );
}
const WireframeBox = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <View style={wireframeStyles.container}>
      <Text style={wireframeStyles.label}>{label}</Text>
      <View style={wireframeStyles.content}>
        {children}
      </View>
    </View>
  );
};



function QuoteScreen({ navigation }: { navigation: any }) {

const [selectedCourses, setSelectedCourses] =useState<number[]>([]);
const [name,setName] =useState('')
const [email, setEmail] =useState('');
const [phone, setPhone]= useState('');


const courses=[
{name: 'child minding', price:750},
{name:'garden maintenance', price:750},
{name:'sewing', price:1500},
{name:'cooking', price:750},
{name:'landscaping', price:1500},
{name:'life skills', price:1500},
{name:'firt aid', price:1500}
];

const toggleCourse = (index: number) => {
    if (selectedCourses.includes(index)) {
      setSelectedCourses(selectedCourses.filter(i => i !== index));
    } else {
      setSelectedCourses([...selectedCourses, index]);
    }
  };

  const calculateDiscount = (count: number) => {
    if (count >= 4) return 0.15;
    if (count === 3) return 0.10;
    if (count === 2) return 0.05;
    return 0;
  };

  const subtotal = selectedCourses.reduce((sum, index) => sum + courses[index].price, 0);
  const discountRate = calculateDiscount(selectedCourses.length);
  const discount = subtotal * discountRate;
  const total = subtotal - discount;

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Quote submitted:', { name, email, phone, selectedCourses, total });
    alert('Quote request submitted!');
  };

  return (
    <ScrollView style={quoteStyles.container}>
      <View style={quoteStyles.header}>
        <View style={quoteStyles.headerContent}>
          <Text style={quoteStyles.headerTitle}>Quote Calculator</Text>
          <Text style={quoteStyles.headerSubtitle}>Select multiple courses and get instant discounts</Text>
        </View>
      </View>

      <View style={quoteStyles.mainContent}>
        <View style={quoteStyles.grid}>
          <View style={quoteStyles.column}>
            <WireframeBox label="Course Selection">
              <Text style={quoteStyles.sectionTitle}>Select Courses</Text>
              <View style={quoteStyles.courseList}>
                {courses.map((course, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      quoteStyles.courseItem,
                      selectedCourses.includes(index) && quoteStyles.courseItemSelected
                    ]}
                    onPress={() => toggleCourse(index)}
                  >
                    <View style={[
                      quoteStyles.checkbox,
                      selectedCourses.includes(index) && quoteStyles.checkboxSelected
                    ]}>
                      {selectedCourses.includes(index) && (
                        <Text style={quoteStyles.checkmark}>✓</Text>
                      )}
                    </View>
                    <Text style={quoteStyles.courseText}>
                      {course.name} - R{course.price.toLocaleString()}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </WireframeBox>
          </View>

          <View style={quoteStyles.column}>
            <WireframeBox label="Quote Summary">
              <View style={quoteStyles.quoteSummary}>
                <Text style={quoteStyles.sectionTitle}>Quote Summary</Text>
                <View style={quoteStyles.summaryDetails}>
                  <View style={quoteStyles.summaryRow}>
                    <Text style={quoteStyles.summaryLabel}>Selected Courses:</Text>
                    <Text style={quoteStyles.summaryValue}>{selectedCourses.length}</Text>
                  </View>
                  <View style={quoteStyles.summaryRow}>
                    <Text style={quoteStyles.summaryLabel}>Subtotal:</Text>
                    <Text style={quoteStyles.summaryValue}>R{subtotal.toLocaleString()}</Text>
                  </View>
                  {discount > 0 && (
                    <View style={quoteStyles.summaryRow}>
                      <Text style={quoteStyles.discountLabel}>Discount ({Math.round(discountRate * 100)}%):</Text>
                      <Text style={quoteStyles.discountValue}>-R{discount.toLocaleString()}</Text>
                    </View>
                  )}
                  <View style={quoteStyles.separator} />
                  <View style={quoteStyles.summaryRow}>
                    <Text style={quoteStyles.totalLabel}>Total:</Text>
                    <Text style={quoteStyles.totalValue}>R{total.toLocaleString()}</Text>
                  </View>
                </View>

                <View style={quoteStyles.discountInfo}>
                  <Text style={quoteStyles.discountTitle}>Discount Structure:</Text>
                  <View style={quoteStyles.discountList}>
                    <Text style={quoteStyles.discountItem}>• 1 course = No discount</Text>
                    <Text style={quoteStyles.discountItem}>• 2 courses = 5% discount</Text>
                    <Text style={quoteStyles.discountItem}>• 3 courses = 10% discount</Text>
                    <Text style={quoteStyles.discountItem}>• 4+ courses = 15% discount</Text>
                  </View>
                </View>

                <View style={quoteStyles.form}>
                  <TextInput
                    style={quoteStyles.input}
                    placeholder="Your Name"
                    placeholderTextColor="#3F403C80"
                    value={name}
                    onChangeText={setName}
                  />
                  <TextInput
                    style={quoteStyles.input}
                    placeholder="Email Address"
                    placeholderTextColor="#3F403C80"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                  />
                  <TextInput
                    style={quoteStyles.input}
                    placeholder="Phone Number"
                    placeholderTextColor="#3F403C80"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                  />
                  <TouchableOpacity
                    style={quoteStyles.submitButton}
                    onPress={handleSubmit}
                  >
                    <Text style={quoteStyles.submitButtonText}>Submit Quote Request</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </WireframeBox>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function CourseScreen({ navigation }: { navigation: any }) {
  const [selectedDuration, setSelectedDuration] = useState<'6week' | '6month'>('6week')
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={quoteStyles.header}>
        <View style={quoteStyles.headerContent}>
          <Text style={quoteStyles.headerTitle}>Training Course</Text>
          <Text style={quoteStyles.headerSubtitle}>Choose your Programme</Text>
        </View>
      </View>
        <Card style={styles.card}>

          <Text style={styles.courseText}>Mobile Course Tabs</Text>

          <View style={styles.switchButton}>
            <TouchableOpacity style={styles.sixWeekButton} onPress={() => setSelectedDuration('6week')}>
              <Text style={styles.weekText}>6 Week Courses</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sixMonthButton} onPress={() => setSelectedDuration('6month')} >
              <Text style={styles.monthText}>6 Month Courses</Text>
            </TouchableOpacity>
          </View>

          {selectedDuration === '6week' && (
            <>

              <TouchableOpacity style={styles.lifeSkills} onPress={() => navigation.navigate('ChildMinding')}>    
                <Text style={styles.price}>R750</Text>
                <Text style={styles.text}>Child Minding</Text>
                <Text>Child care and Well Being</Text>
                <TouchableOpacity
                  style={styles.addButton}>
                  <Text style={styles.addButtonText}>Add To Quote</Text>
                </TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cooking} onPress={() => navigation.navigate('Cooking')}>
                <Text style={styles.price}>R750</Text>
                <Text style={styles.text}>Cooking</Text>
                <Text>Preparing nutrious family meals</Text>
                <TouchableOpacity
                  style={styles.addButton}>
                  <Text style={styles.addButtonText}>Add To Quote</Text>
                </TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity style={styles.lifeSkills} onPress={() => navigation.navigate('GardenMaintenance')}>
               
                  <Text style={styles.price}>R750</Text>
                <Text style={styles.text}>Garden Maintenance</Text>
                <Text>Plant Care and Maintenance</Text>
                <TouchableOpacity
                  style={styles.addButton}>
                  <Text style={styles.addButtonText}>Add To Quote</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </>
          )}

          {selectedDuration === '6month' && (
            <>
              <TouchableOpacity style={styles.firstAid} onPress={() => navigation.navigate('FirstAid')}>
                <Text style={styles.price}>R1500</Text>
                <Text style={styles.text}>First Aid</Text>
                <Text>Emergency Response and CPR</Text>
                <TouchableOpacity style={styles.addButton} ><Text style={styles.addButtonText}>Add To Quote</Text></TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity style={styles.sewing} onPress={() => navigation.navigate('Sewing')}>
                <Text style={styles.price}>R1500</Text>
                <Text style={styles.text}>Sewing</Text>
                <Text>Basic stitching and repairs</Text>
                <TouchableOpacity style={styles.addButton}><Text style={styles.addButtonText}>Add To Quote</Text></TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity style={styles.landscaping} onPress={() => navigation.navigate('Landscaping')}>
               <Text style={styles.price}>R1500</Text>
                <Text style={styles.text}>Landscaping</Text>
                <Text>Garden Design and Plant Care</Text>
                <TouchableOpacity style={styles.addButton}><Text style={styles.addButtonText}>Add To Quote</Text></TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity style={styles.lifeSkills} onPress={() => navigation.navigate('LifeSkills')}>
                <Text style={styles.price}>R1500</Text>
                <Text style={styles.text}>Life Skills</Text>
                <Text>Personal Finance and Communication</Text>
                <TouchableOpacity style={styles.addButton}><Text style={styles.addButtonText}>Add To Quote</Text></TouchableOpacity>
              </TouchableOpacity>
            </>
          )}
        </Card>
      </ScrollView>
    </View>
  );
}

function FirstAidScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView>
     
        <Card style={styles.card}>
          <Text style={styles.title}>First Aid</Text>
          <Text style={styles.price}>R1500</Text>
          <Text style={styles.learning}>What You Will Learn</Text>
          <Text style={styles.firstAidInfo}>Emergency Assessment: How to assess a scene, manage an emergency, and contact emergency services.</Text>
          <Text style={styles.firstAidInfo}>Life Support: Performing Cardiopulmonary Resuscitation (CPR), managing choking, and treating shock.</Text>
          <Text style={styles.firstAidInfo}>Injury Treatment: Caring for bleeding wounds, treating burns, and immobilizing fractures.</Text>
          <Text style={styles.firstAidInfo}>Medical Conditions: Recognizing and managing sudden illnesses like heart attacks and strokes.</Text>
          <Text style={styles.firstAidInfo}>Safety & Precautions: The importance of personal safety, universal precautions, and proper use of first aid kits. </Text>
        </Card>
      </ScrollView>
    </View>
  );
}
function SewingScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Text style={styles.title} >Sewing</Text>
          <Text style={styles.price}>R1500</Text>
          <Text style={styles.learning}>What You Will Learn</Text>

          <Text style={styles.sewingInfo}>Class 1: Introduction to a basic sewing machine, studying the machine functions and components, testing the machine stitch quality and testing various stitch types.</Text>
          <Text style={styles.sewingInfo}>Class 2: Unpacking sewing terminology & tools, touch on small exercises such as darts, pleats, hem, seams etc. Look at size charts, body measurements and measuring the body correctly.</Text>
          <Text style={styles.sewingInfo}>Class 3: Introduction to pattern making, discuss the basic block template & look at quarter and half scale divisions.
            Pattern drafting for a basic bodice top with front & back darts in your own size.</Text>
          <Text style={styles.sewingInfo}>Class 4: Complete pattern drafting for the top, intro to non-stretch materials, instructions on how to fold material, place patterns and cutting against selvages with seam-allowance.</Text>
          <Text style={styles.sewingInfo}>Class 5: Continue sewing the top to completion, intro to bias binding for neck and arms and inserting the invisible zip using the zip footer.</Text>
          <Text style={styles.sewingInfo}>Class 6: Introduction to the theory of skirts (14 types of skirts) drawing activity to understand silhouettes, slash & spread technique and pattern making for the circular skirt.</Text>
          <Text style={styles.sewingInfo}>Class 7: Cutting & sewing the circular skirt, insert inseam pockets ,waist-band with interfacing or fusing and hemming.</Text>
          <Text style={styles.sewingInfo}>Class 8: Complete sewing the skirt and start pattern making for a dress of your choice, incorporate facings and sleeves.</Text>
          <Text style={styles.sewingInfo}>Class 9: Complete the pattern-making for the dress and start cutting all patterns exploring "on-fold" and "away from fold" terminologies and start sewing the dress.</Text>
          <Text style={styles.sewingInfo}>Class 10: Complete the sewing of the dress and start introduction to pants, do all the measurements & calculations of the pants measurements.</Text>
          <Text style={styles.sewingInfo}>Class 11: Start drafting pants patterns, the skinny leg version and convert to the palazzo Style, choose your pants design and start cutting your pants on fabric.</Text>
          <Text style={styles.sewingInfo}>Class 12: Sew your pants to completion, include pockets, waistband and back or side invisible zip.
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
}


// Landscaping Screen

function LandscapingScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Text style={styles.title}>Landscaping (6-Month Course)</Text>
          <Text style={styles.price}>R1500</Text>
          <Text style={styles.learning}>What You Will Learn</Text>

          <Text style={styles.landscapingInfo}>Month 1: Introduction to landscaping – understanding indigenous and exotic plants, soil types, and garden planning basics.</Text>
          <Text style={styles.landscapingInfo}>Month 2: Learning plant identification and maintenance techniques (watering, pruning, and soil care).</Text>
          <Text style={styles.landscapingInfo}>Month 3: Designing balanced gardens – how to group plants and trees for symmetry and function.</Text>
          <Text style={styles.landscapingInfo}>Month 4: Working with fixed garden structures (fountains, benches, statues, and tables).</Text>
          <Text style={styles.landscapingInfo}>Month 5: Exploring garden aesthetics – colours, shapes, and seasonal plant choices.</Text>
          <Text style={styles.landscapingInfo}>Month 6: Creating a complete garden layout project from start to finish and presenting your design.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}


// Life Skills Screen

function LifeSkillsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Text style={styles.title}>Life Skills (6-Month Course)</Text>
          <Text style={styles.price}>R1500</Text>
          <Text style={styles.learning}>What You Will Learn</Text>

          <Text style={styles.lifeSkillsInfo}>Month 1: Personal development and goal setting – understanding daily responsibilities and self-management.</Text>
          <Text style={styles.lifeSkillsInfo}>Month 2: Financial literacy – opening a bank account, saving, and managing personal budgets.</Text>
          <Text style={styles.lifeSkillsInfo}>Month 3: Understanding basic labour law – knowing your rights and workplace expectations.</Text>
          <Text style={styles.lifeSkillsInfo}>Month 4: Building strong reading and writing literacy through practical exercises.</Text>
          <Text style={styles.lifeSkillsInfo}>Month 5: Strengthening numeric literacy – learning how to handle everyday calculations and expenses.</Text>
          <Text style={styles.lifeSkillsInfo}>Month 6: Applying all life skills in real-world scenarios (mock banking, workplace simulations, budgeting projects).</Text>
        </Card>
      </ScrollView>
    </View>
  );
}


// Child Minding Screen

function ChildMindingScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Text style={styles.title}>Child Minding (6-Week Course)</Text>
          <Text style={styles.price}>R750</Text>
          <Text style={styles.learning}>What You Will Learn</Text>

          <Text style={styles.childMindingInfo}>Week 1: Introduction to child minding – understanding safety and hygiene.</Text>
          <Text style={styles.childMindingInfo}>Week 2: Caring for newborns (birth to six months): feeding, sleeping, and diaper care routines.</Text>
          <Text style={styles.childMindingInfo}>Week 3: Caring for babies (seven months to one year): nutrition, play, and development activities.</Text>
          <Text style={styles.childMindingInfo}>Week 4: Supporting toddlers – behaviour, daily routines, and independence skills.</Text>
          <Text style={styles.childMindingInfo}>Week 5: Encouraging learning through educational toys and storytelling.</Text>
          <Text style={styles.childMindingInfo}>Week 6: Managing daily schedules and completing a supervised child care practical.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}

function CookingScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Text style={styles.title}>Cooking</Text>
          <Text style={styles.price}>R750</Text>
          <Text style={styles.learning}>What You Will Learn</Text>

          <Text style={styles.cookingInfo}>Week 1: Introduction to Knife Skills and Kitchen Basics – basic knife skills and techniques, and condiments.</Text>

          <Text style={styles.cookingInfo}>Week 2: Stocks, Sauces and Soups – Espagnole, Velouté, Béchamel, Hollandaise, Gazpacho and Vichyssoise.</Text>

          <Text style={styles.cookingInfo}>Week 3: Making Pasta – Spaetzle, spaghetti, tagliatelle, ravioli, tortellini, cannelloni, and rice noodles.</Text>

          <Text style={styles.cookingInfo}>Week 4: Rice, Grains, and Legumes – Quinoa, risotto, Couscous, Bulgur, Lentils, Millet, and Polenta.</Text>

          <Text style={styles.cookingInfo}>Week 5: Prepare and Cook Vegetables and Plant Proteins – Au gratin, Tempura, battered, baked, and more.</Text>

          <Text style={styles.cookingInfo}>Week 6: Fish and Shellfish – salmon, stuffed fish, Moules marinière, and prawns.</Text>

          <Text style={styles.cookingInfo}>Week 7: Poultry and Game Birds – cordon bleu, duck, liver pâté, and ostrich.</Text>

          <Text style={styles.cookingInfo}>Week 8 & 9: Meat Part 1 and 2 (Beef, Lamb, and Pork) – Beef wellington, roulades, stroganoff, and more.</Text>

        </Card>
      </ScrollView>
    </View>
  );
}


// Garden Maintenance Screen

function GardenMaintenanceScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Text style={styles.title}>Garden Maintenance (6-Week Course)</Text>
          <Text style={styles.price}>R750</Text>
          <Text style={styles.learning}>What You Will Learn</Text>
         
          <Text style={styles.gardenMaintenanceInfo}>Week 1: Introduction to domestic gardens and plant care basics.</Text>
          <Text style={styles.gardenMaintenanceInfo}>Week 2: Understanding water restrictions and proper watering methods for different plants.</Text>
          <Text style={styles.gardenMaintenanceInfo}>Week 3: Learning pruning techniques and plant propagation.</Text>
          <Text style={styles.gardenMaintenanceInfo}>Week 4: Practicing planting techniques for various plant types.</Text>
          <Text style={styles.gardenMaintenanceInfo}>Week 5: Identifying common garden problems and applying maintenance solutions.</Text>
          <Text style={styles.gardenMaintenanceInfo}>Week 6: Completing a full garden maintenance plan and practical assessment.</Text>
        </Card>
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="MainTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Course" component={CourseScreen} />
        <Stack.Screen name="FirstAid" component={FirstAidScreen} />
        <Stack.Screen name="Sewing" component={SewingScreen} />
        <Stack.Screen name="Landscaping" component={LandscapingScreen} />
        <Stack.Screen name="LifeSkills" component={LifeSkillsScreen} />
        <Stack.Screen name="ChildMinding" component={ChildMindingScreen} />
        <Stack.Screen name="Cooking" component={CookingScreen} />
        <Stack.Screen name="GardenMaintenance" component={GardenMaintenanceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// stylesheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D6D2C5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 29,
    margin: 15,
    fontWeight: 'bold',
  },
  since2022: {
    fontSize: 15,
    margin: 15,
    fontWeight: '600',
  },
  video: {
    alignSelf: 'center',
    width: 250,
    height: 200,
  },
  courseButton: {
    width: 260,
    height: 40,
    margin: 10,
    backgroundColor: '#99A637',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  quoteButton: {
    width: 260,
    height: 40,
    margin: 10,
    borderColor: '#99A637',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  courseButtonText: {
    fontSize: 15,
    color: '#fff'
  },
  card: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#99A637',
    margin: 15,
    padding: 2,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coursetab: {
    width: 100,
    height: 100,
    margin: 15,
    borderWidth: 1,
    borderColor: '#99A637',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  quotetab: {
    width: 100,
    height: 100,
    margin: 15,
    borderWidth: 1,
    borderColor: '#99A637',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  mqa: {
    fontSize: 16,
    margin: 10,
  },
  courseText: {
    fontWeight: '600',
    fontSize: 15,
    margin: 10,
  },
  switchButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sixWeekButton: {
    width: 150,
    height: 30,
    borderWidth: 1,
    borderColor: '#99A637',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  sixMonthButton: {
    width: 150,
    height: 30,
    borderWidth: 1,
    borderColor: '#99A637',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  weekText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  monthText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  row:{
    flexDirection:'row'
  },
  firstAid: {
    width: 250,
    height: 70,
    margin: 21,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#fff',
    padding: 10,
  },
  addButton: {
    width: 250,
    height: 30,
    margin: 5,
    backgroundColor: '#99A637',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  sewing: {
    width: 250,
    height: 70,
    margin: 21,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#fff',
    padding: 10,
  },
  landscaping: {
    width: 250,
    height: 70,
    margin: 21,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#fff',
    padding: 10,
  },
  lifeSkills: {
    width: 250,
    height: 70,
    margin: 21,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#fff',
    padding: 10,
  },
  price: {
    fontSize: 13,
    borderWidth: 2,
    borderColor: '#99A637',
    borderRadius: 10,
    marginLeft: 170,
    padding: 2,
  },
  addButtonText: {
    color: '#fff'
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
  cooking: {
    width: 250,
    height: 70,
    margin: 21,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#fff',
    padding: 10,
  },
  firstAidInfo: {
    fontSize: 18,
    fontWeight: '600',
    margin: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 15,
  },
  learning: {
    fontSize: 20,
    fontWeight: '600',
    margin: 15,
  },
  sewingInfo: {
    fontSize: 18,
    fontWeight: '600',
    margin: 15,
  },
  cookingInfo: {
    fontSize: 18,
    fontWeight: '600',
    margin: 15,
  },
 
  //same style conent but now week/month specific
  landscapingInfo: {
    fontSize: 18,
    fontWeight: '600',
    margin: 15,
  },
  lifeSkillsInfo: {
    fontSize: 18,
    fontWeight: '600',
    margin: 15,
  },
  childMindingInfo: {
    fontSize: 18,
    fontWeight: '600',
    margin: 15,
  },
  gardenMaintenanceInfo: {
    fontSize: 18,
    fontWeight: '600',
    margin: 15,
  },
  nameOfFounder:{
    fontSize:20,
    fontWeight:'500',
    marginLeft:55,
    marginTop:10,

  },
  images:{
    width: 150,
     height: 150,
      borderRadius: 100,
      marginLeft:55,
      marginTop:10,
  },
  position:{
    fontSize:15,
    fontWeight:'100',
    marginLeft:60,
    marginBottom:15,
  },
  story:{
    fontSize:15,
    margin:15
  },
  quote:{
    fontSize:15,
    margin:15,
  },
  missionHeader:{
    fontSize:20,
    fontWeight:'500',
    marginTop:10,
    marginLeft:10,
  },
  mission:{
    fontSize:15,
    margin:15
  },
  visionHeader:{
    fontSize:20,
    fontWeight:'500',
    marginLeft:10,
    marginTop:10,
  },
  vision:{
    fontSize:15,
    margin:15
  },
  studentreview:{
fontSize:20,
    fontWeight:'500',
   margin:20,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#99A637',
  },
  studentName:{
     fontSize:17,
    fontWeight:'500',
    margin:5,
  },
   contactInput:{
    height: 40,
    width:250,
    marginLeft: 20,
    marginTop:10,
    marginBottom:10,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'white',
    borderColor:'#99A637',
    borderRadius:10
  },
  contactSendButton:{
     width: 300,
    height: 40,
    margin: 5,
    backgroundColor: '#99A637',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  contactImage:{
    width:50,
    height:50,
    marginLeft:120,
    marginRight:100,
    marginBottom:20,
    marginTop:20,
    borderRadius:100,
  },
  contactSendText:{
    color:'white',
    fontSize:15,
  },
  whatsappButton:{
    width: 100,
    height: 40,
    marginLeft: 100,
    marginRight:100,
    marginBottom:35,
    backgroundColor: '#99A637',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  startChat:{
    fontSize:17,
    marginTop:10,
    marginLeft:90,
    marginRight:90,
    marginBottom:25,
    color:'white',
  },
 

});
const wireframeStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  label: {
    position: 'absolute',
    top: -6,
    left: 8,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    fontSize: 10,
    color: '#666',
  },
  content: {
    marginTop: 4,
  },
});
  // Quote Screen Styles
  const quoteStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#EDF2C9',
    borderBottomWidth: 2,
    borderBottomColor: '#99A637',
    padding: 24,
  },
  headerContent: {
    alignSelf: 'center',
    width: '100%',
  
  },
  headerRow:{
flexDirection:'row'
  },

  headerTitle: {
    fontSize: 24,
    color: '#3F403C',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    marginTop: 8,
    color: '#3F403CCC',
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  grid: {
    gap: 16,
  },
  column: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 16,
    color: '#3F403C',
    fontWeight: 'bold',
  },
  courseList: {
    gap: 12,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 4,
    backgroundColor: 'white',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 2,
  },
  courseText: {
    fontSize: 14,
    color: '#3F403C',
  },
  quoteSummary: {
    backgroundColor: '#EDF2C999',
    padding: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9EA663',
  },
  summaryDetails: {
    gap: 8,
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#3F403C',
  },
  summaryValue: {
    fontSize: 14,
    color: '#3F403C',
  },
  discountLabel: {
    fontSize: 14,
    color: '#99A637',
  },
  discountValue: {
    fontSize: 14,
    color: '#99A637',
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 8,
  },
  totalLabel: {
    fontSize: 18,
    color: '#3F403C',
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 18,
    color: '#3F403C',
    fontWeight: 'bold',
  },
  discountInfo: {
    backgroundColor: '#9EA66333',
    padding: 12,
    borderRadius: 4,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#9EA6634D',
  },
  discountTitle: {
    marginBottom: 8,
    color: '#3F403C',
    fontSize: 14,
    fontWeight: 'bold',
  },
  discountList: {
    gap: 4,
  },
  discountItem: {
    fontSize: 12,
    color: '#3F403CE6',
  },
  form: {
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#9EA663',
    borderRadius: 4,
    padding: 12,
    fontSize: 14,
    color: '#3F403C',
    backgroundColor: 'white',
  },
  submitButton: {
    backgroundColor: '#99A637',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  courseItemSelected: {
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    padding: 10,
  },
  checkboxSelected: {
    borderColor: '#2196f3',
    backgroundColor: '#bbdefb',
  },
  checkmark: {
    width: 20,
    height: 20,
    tintColor: '#4CAF50',
  },
});